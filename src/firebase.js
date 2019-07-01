import app from "firebase/app";
import "firebase/auth";
import config from "./firebaseConfig";

app.initializeApp(config);

export default app;
