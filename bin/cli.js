#!/usr/bin/env node

const { file2qr } = require('../file2qr');
const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Usage: file2qr <inputPath> [outputPath]');
    process.exit(1);
}

const [inputPath, outputPath] = args;

file2qr(inputPath, outputPath);