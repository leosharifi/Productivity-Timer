"use client";

import styles from "./BackgroundColors.module.css";
import { useEffect, useState } from "react";

interface BackgroundColorsProps {
  isVisible: boolean;
  onClose: () => void;
}

const colors = [
  { id: 1, type: "color", value: "#FF6B6B", name: "Focus Red" },
  { id: 2, type: "color", value: "#4ECDC4", name: "Calm Teal" },
  { id: 3, type: "color", value: "#1A73E8", name: "Productive Blue" },
  { id: 4, type: "color", value: "#212121", name: "Deep Focus Black" },
  { id: 5, type: "color", value: "#FFC107", name: "Energy Amber" },
  { id: 6, type: "color", value: "#8E44AD", name: "Creative Purple" },
  { id: 7, type: "color", value: "#E63946", name: "Motivation Crimson" },
  { id: 8, type: "color", value: "#2ECC71", name: "Growth Green" },
  { id: 9, type: "color", value: "#00BFFF", name: "Clear Sky" },
  { id: 10, type: "color", value: "#B0BEC5", name: "Neutral Gray" },
  { id: 11, type: "color", value: "#FF9F1C", name: "Alert Orange" },
  { id: 12, type: "color", value: "#00FFAB", name: "Fresh Aqua" },
];

const gradients = [
  {
    id: 13,
    type: "gradient",
    value: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    name: "Calm Sunset",
  },
  {
    id: 14,
    type: "gradient",
    value: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    name: "Dream Flow",
  },
  {
    id: 15,
    type: "gradient",
    value: "linear-gradient(135deg, #f6d365, #fda085)",
    name: "Warm Focus",
  },
  {
    id: 16,
    type: "gradient",
    value: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    name: "Fresh Breeze",
  },
  {
    id: 17,
    type: "gradient",
    value: "linear-gradient(135deg, #cfd9df, #e2ebf0)",
    name: "Soft Mist",
  },
  {
    id: 18,
    type: "gradient",
    value: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    name: "Gentle Glow",
  },
  {
    id: 19,
    type: "gradient",
    value: "linear-gradient(135deg, #30cfd0, #330867)",
    name: "Deep Ocean",
  },
  {
    id: 20,
    type: "gradient",
    value: "linear-gradient(135deg, #667eea, #764ba2)",
    name: "Royal Calm",
  },
  {
    id: 21,
    type: "gradient",
    value: "linear-gradient(135deg, #fddb92, #d1fdff)",
    name: "Golden Focus",
  },
  {
    id: 22,
    type: "gradient",
    value: "linear-gradient(135deg, #6a11cb, #2575fc)",
    name: "Blue Energy",
  },
  {
    id: 23,
    type: "gradient",
    value: "linear-gradient(135deg, #ff6a00, #ee0979)",
    name: "Active Sunrise",
  },
  {
    id: 24,
    type: "gradient",
    value: "linear-gradient(135deg, #00c6ff, #0072ff)",
    name: "Clear Ocean",
  },
];

const images = [
  {
    id: 25,
    type: "image",
    value:
      "url('https://i.pinimg.com/564x/39/65/46/39654693f718ae57538bfb7bf41b217c.jpg')",
    name: "Abstract Lines",
  },
  {
    id: 26,
    type: "image",
    value:
      "url('https://w0.peakpx.com/wallpaper/103/274/HD-wallpaper-laptop-red-sunset-background-laptop.jpg')",
    name: "Evening soft",
  },
  {
    id: 27,
    type: "image",
    value:
      "url('https://images.unsplash.com/photo-1573339607881-208e75e4b267?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D')",
    name: "Dark Forest",
  },
  {
    id: 28,
    type: "image",
    value:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iD6hhds0dNFUD4TA71EcD7hDUCEjZ9ivakE2zLC2kqwiaI1w_XXqHZs-P_QDLvYVRE4&usqp=CAU')",
    name: "Neon Shapes",
  },
  {
    id: 29,
    type: "image",
    value: "url('https://cdn.wallpapersafari.com/78/37/LJUnOz.jpg')",
    name: "Nice building",
  },
  {
    id: 30,
    type: "image",
    value:
      "url('https://wallpapers.com/images/hd/winter-house-and-northern-lights-h94zy5iui2xecyep.jpg')",
    name: "Snow Texture",
  },
  {
    id: 31,
    type: "image",
    value:
      "url('https://i.pinimg.com/736x/10/1c/71/101c71b9e691b7e6d2ef26c94c223551.jpg')",
    name: "Tree in the Street",
  },
  {
    id: 32,
    type: "image",
    value:
      "url('https://media.istockphoto.com/id/967091454/photo/sun-and-cloud-background-with-a-pastel-colored.jpg?s=612x612&w=0&k=20&c=k4zJCZpEdnzVIUa5fU2diEXF1z_znLPT3mXC3zQIAJc=')",
    name: "Pastel Clouds",
  },
  {
    id: 33,
    type: "image",
    value:
      "url('https://i.pinimg.com/736x/1f/ab/80/1fab805dc3dd2aab386b855e4ef9748c.jpg')",
    name: "Space Nebula",
  },
  {
    id: 34,
    type: "image",
    value:
      "url('https://gimgs2.nohat.cc/thumb/f/640/beautiful-pink-bokeh-soft-blurred-background-free-vector--f7405147aba24af79f39.jpg')",
    name: "Soft Blur",
  },
  {
    id: 35,
    type: "image",
    value:
      "url('https://png.pngtree.com/background/20250523/original/pngtree-green-cyber-picture-image_16545260.jpg')",
    name: "Cyber Grid",
  },
  {
    id: 36,
    type: "image",
    value:
      "url('https://4kwallpapers.com/images/wallpapers/northern-lights-4480x2520-9864.jpg')",
    name: "Aurora Lights",
  },
];

export default function BackgroundColors({
  isVisible,
  onClose,
}: BackgroundColorsProps) {
  const [theme, setTheme] = useState<string>("#a92a2aff");
  const changeTheme = (colorVal: string) => {
    setTheme(colorVal);
  };
  useEffect(() => {
    document.body.style.background = theme;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.objectFit = "cover";
    return () => {
      document.body.style.background = "";
    };
  }, [theme]);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Pick Background</span>
          <button onClick={onClose} className={styles.close}>
            ✖
          </button>
        </div>

        {/* COLORS */}
        <h3 className={styles.sectionTitle}>Colors</h3>
        <div className={styles.list}>
          {colors.map((opt) => (
            <button
              key={opt.id}
              className={styles.swatch}
              style={{ background: opt.value }}
              onClick={() => changeTheme(opt.value)}
            />
          ))}
        </div>

        {/* GRADIENTS */}
        <h3 className={styles.sectionTitle}>Gradients</h3>
        <div className={styles.list}>
          {gradients.map((opt) => (
            <button
              key={opt.id}
              className={styles.swatch}
              style={{ background: opt.value }}
              onClick={() => changeTheme(opt.value)}
            />
          ))}
        </div>

        {/* IMAGES */}
        <h3 className={styles.sectionTitle}>Images</h3>
        <div className={styles.list}>
          {images.map((opt) => (
            <button
              key={opt.id}
              className={styles.swatch}
              style={{
                background: opt.value,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => changeTheme(opt.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
