import User from '../models/Users';

export async function createUser(req, res) {
    try {
        const { name, password, email } = req.body;

        const newUser = await User.create({
            name,
            password,
            email
        });
        res.json({ message: 'New User Stored' });
    } catch (error) {
        console.log(error);
    }
};

/* 
ejemplo de aut segun https://javascript.plainenglish.io/password-encryption-using-bcrypt-sequelize-and-nodejs-fb9198634ee7
const authenticateUserWithemail = (user) => {
    return new Promise((resolve, reject) => {
     try {
      usermodel.findOne({
      where: {
       user_email: user.userName // user email
      }
      }).then(async (response) => {
       if (!response) {
        resolve(false);
       } else {
         if (!response.dataValues.password || 
          !await response.validPassword(user.password, 
           response.dataValues.password)) {
            resolve(false);
         } else {
          resolve(response.dataValues)
         }
        }
       })
      } catch (error) {
      const response = {
       status: 500,
       data: {},
      error: {
       message: "user match failed"
      }
      };
     reject(response);
     }
    })
   } */