# 🟢 PCB Defect Detection using YOLOv5

> **Automated detection and localization of PCB manufacturing defects using YOLOv5 and the Akhatova PCB Defects dataset**

---

## 📌 Overview

Printed Circuit Boards (PCBs) are the backbone of modern electronics — even tiny manufacturing defects can lead to malfunction, costly repairs, or total product failure. Manual inspection is time-consuming and error-prone.

This project implements an **automated PCB defect detection system** using **YOLOv5**, a state-of-the-art real-time object detection framework. The model is trained to locate and classify multiple PCB defect types with high accuracy, enabling rapid and reliable inspection in manufacturing environments.

---

## 🎯 Key Highlights

- ⚡ **Fast & accurate detection** using YOLOv5
- ✅ Trained on the [Akhatova PCB Defects Dataset](https://www.kaggle.com/datasets/akhatova/pcb-defects)
- 📌 Detects common PCB defects: missing hole, mouse bite, open circuit, short, spurious copper, etc.
- 🗂️ Modular pipeline for training and inference
- 🔍 Precise bounding boxes for defect localization
- 🧩 Easy to retrain or extend for other defect types

---

## ⚙️ Tech Stack

- Python 3.x
- YOLOv5 (Ultralytics)
- PyTorch
- OpenCV
- NumPy, Pandas, Matplotlib

---

## 📂 Project Structure
```bash
pcb-defect-detection/
├── dataset/ # PCB images & labels (YOLO format)
├── runs/ # YOLOv5 training runs & results
├── weights/ # Trained model weights (.pt)
├── train.py # Training script
├── detect.py # Inference script for testing
├── dataset.yaml # YOLOv5 dataset configuration
├── requirements.txt # Project dependencies
└── README.md # Project documentation (this file)
```
---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ChiragSingh01/pcb-defect-detection.git
cd pcb-defect-detection
```
### 2️⃣ Install dependencies
```bash
pip install -r requirements.txt
```
**or manually:**

```bash
pip install torch torchvision torchaudio
pip install opencv-python
pip install matplotlib
pip install pandas
```

### 3️⃣ Download the dataset
Download the PCB Defects Dataset and extract it to the ```dataset/``` folder.
Ensure your folder structure looks like this:

```bash
dataset/
 ├── images/
 │   ├── train/
 │   ├── val/
 │   ├── test/
 ├── labels/
 │   ├── train/
 │   ├── val/
 │   ├── test/
```

### 4️⃣ Configure the dataset

Make sure your ```dataset.yaml``` file is correctly set up. Example:

```yaml
train: dataset/images/train
val: dataset/images/val

nc: 6
names: ['missing_hole', 'mouse_bite', 'open_circuit', 'short', 'spurious_copper', 'other_defects']
```

### 5️⃣ Train YOLOv5
```bash
python train.py --img 640 --batch 16 --epochs 50 --data dataset.yaml --weights yolov5s.pt
```
Adjust image size, batch size, or starting weights as needed.

### 6️⃣ Run detection
After training, run detection on new images:
```bash
python detect.py --weights runs/train/exp/weights/best.pt --source dataset/images/test
```
Detected images with bounding boxes will be saved in ```runs/detect/```.

## Model performance:
- ✔️ mAP: ~95% (update with your actual test results!)
- ✔️ Fast detection speed on standard hardware
- ✔️ Multiple defect categories detected with high precision

## 📌 Use Cases
- 📏 Automated optical inspection (AOI) in PCB production lines
- ⚡ Real-time defect detection and sorting
- 🧩 Extendable to other electronics manufacturing tasks

## 🔍 Future Improvements
- 📈 Improve accuracy with more diverse training data & augmentations
- 🗂️ Add support for real-time video stream inspection
- 🧩 Integrate with industrial edge devices (Jetson Nano, Raspberry Pi, etc.)
- 📝 Generate automatic defect reports for quality control

## 📚 References
- [YOLOv5 by Ultralytics](https://github.com/ultralytics/yolov5)
- [Akhatova PCB Defects Dataset](https://www.kaggle.com/datasets/akhatova/pcb-defects)

## 👨‍💻 Author
**Chirag**

## ⭐ Support
If you find this project useful, please ⭐ star this repo and share it — it helps more developers discover it!