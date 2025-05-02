"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.firebaseAdmin = void 0;
const dotenv_1 = require("dotenv");
const admin = require("firebase-admin");
(0, dotenv_1.config)();
const serviceAccount = {
    project_id: process.env.project_id,
    private_key: process.env.private_key.replace(/\\n/gm, '\n'),
    client_email: process.env.client_email,
};
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fitnessapp-3f674-default-rtdb.asia-southeast1.firebasedatabase.app/',
});
exports.firebaseAdmin = admin;
exports.db = admin.database();
//# sourceMappingURL=firebase.config.js.map