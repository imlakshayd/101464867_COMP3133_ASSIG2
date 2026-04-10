const User = require('../models/User');
const Employee = require('../models/Employee');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const resolvers = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('Invalid username or password');
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        throw new Error('Invalid username or password');
      }
      const token = generateToken(user);
      return { token, user };
    },

    getAllEmployees: async () => {
      return await Employee.find();
    },

    getEmployeeById: async (_, { id }) => {
      const employee = await Employee.findById(id);
      if (!employee) {
        throw new Error('Employee not found');
      }
      return employee;
    },

    searchEmployees: async (_, { department, designation }) => {
      const filter = {};
      if (department) {
        filter.department = { $regex: department, $options: 'i' };
      }
      if (designation) {
        filter.designation = { $regex: designation, $options: 'i' };
      }
      return await Employee.find(filter);
    }
  },

  Mutation: {
    signup: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        throw new Error('Username or email already exists');
      }
      const user = new User({ username, email, password });
      await user.save();
      const token = generateToken(user);
      return { token, user };
    },

    addEmployee: async (_, args) => {
      const existingEmployee = await Employee.findOne({ email: args.email });
      if (existingEmployee) {
        throw new Error('Employee with this email already exists');
      }
      const employee = new Employee(args);
      await employee.save();
      return employee;
    },

    updateEmployee: async (_, { id, ...updates }) => {
      // Remove undefined/null values
      Object.keys(updates).forEach(key => {
        if (updates[key] === undefined || updates[key] === null) {
          delete updates[key];
        }
      });

      const employee = await Employee.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true
      });
      if (!employee) {
        throw new Error('Employee not found');
      }
      return employee;
    },

    deleteEmployee: async (_, { id }) => {
      const employee = await Employee.findByIdAndDelete(id);
      if (!employee) {
        throw new Error('Employee not found');
      }
      return employee;
    }
  }
};

module.exports = resolvers;
