// FILE SHOULD BE DONE

const sequelize = require('../config/connection');
const { User, Posts } = require('../models');

const userInput = require('./userInput.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Posts.bulkCreate(userInput, {
        returning: true,
    });

    process.exit(0);
};

seedDatabase();