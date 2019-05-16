import argon2 from "argon2";
import config from "../../config";

// Creates a new token for verified user
export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};

// Verifies an existing token
export const verifyToken = token => {
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

// Signs up a new user
export const signup = async (req, res) => {
  let { username, password, firstName, lastName, emailAddress } = req.body;

  // First, if any fields were left blank, send 400 (Bad Request) error.
  if (!username || !password || !firstName || !lastName || !emailAddress) {
    return res.status(400).send({ message: "All fields are required." });
  }

  console.log(
    "signup body:",
    username,
    password,
    firstName,
    lastName,
    emailAddress
  );

  // Hash the password, then submit user to the database. On return of
  try {
    let hash = await argon2.hash(password);
    let user = await db.auth.signup(
      username,
      hash,
      firstName,
      lastName,
      emailAddress
    );
    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (e) {
    console.log(e);
  }
};
