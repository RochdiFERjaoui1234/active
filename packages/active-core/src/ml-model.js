// active-core/src/ml-model.js
import * as tf from '@tensorflow/tfjs';

export async function loadXSSModel() {
  const modelUrl = 'https://cdn.active-sec.com/models/xss-detector/model.json ';
  return await tf.loadGraphModel(modelUrl);
}

export async function isMaliciousInput(model, input) {
  const tokens = tokenizeInput(input); // Preprocess input
  const preds = model.predict(tokens);
  return preds.dataSync()[0] > 0.8; // Threshold for maliciousness
}