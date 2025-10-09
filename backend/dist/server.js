"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const note_db_1 = __importDefault(require("./db/note-db"));
const authMiddlerware_1 = require("./middlewares/authMiddlerware");
const auth_1 = __importDefault(require("./routes/auth"));
const notes_1 = __importDefault(require("./routes/notes"));
const app = (0, express_1.default)();
const prot = process.env.PORT || 3000;
// console.log('run ser 🧶💦');
app.get("/", (req, res) => {
    res.send("API is running....");
});
(0, note_db_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
}));
app.use("/", auth_1.default);
// protect all routes after this middleware
app.use(authMiddlerware_1.authenticateUser);
app.use(express_1.default.json());
app.use("/", notes_1.default);
app.listen(prot, () => console.log(`Server running on http://localhost:${prot}`));
