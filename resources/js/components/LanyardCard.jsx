
import { motion } from "framer-motion";
import React from "react";


export default function LanyardCard() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-8 w-1 bg-accent rounded-full -mb-4 z-10"></div>
            <motion.div
                className="rounded-2xl shadow-lg bg-slate-800 text-slate-100 px-8 py-6 flex flex-col items-center relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.98, rotate: -2 }}
                style={{ originY: 0 }}
            >
                <h1 className="font-bold text-2xl">Nama Kamu</h1>
                <p className="text-accent font-medium">
                    UI/UX Designer & Web Developer
                </p>
                <button className="mt-4 px-4 py-2 bg-accent text-primary rounded-xl font-bold shadow-md hover:scale-105 transition">
                    Contact Me
                </button>
            </motion.div>
        </div>
    );
}
