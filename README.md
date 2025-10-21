# Oral Radiology Learning App

A modern, iOS-style educational web application for dental students to review radiographic cases. Built with React and featuring a premium glassmorphic design with UNC branding.

## Features

- **Topic Selection Menu**: Browse 9 different radiology topics with beautiful card-based interface
- **Interactive Case Viewer**: Review cases with detailed clinical information and educational content
- **Modern iOS Design**: Glassmorphism effects, smooth animations, and premium UI
- **UNC Branding**: Navy Blue (#13294B) and Carolina Blue (#4B9CD3) color scheme
- **Responsive Design**: Mobile-first approach that works on all devices
- **Educational Content**: 3 sample cases covering:
  - Periapical Lesion Assessment
  - Panoramic Anomaly Identification
  - Caries Detection and Classification

## Technology Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Create React App** - Zero-config setup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dental-pathology
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
dental-pathology/
├── public/             # Static files
├── src/
│   ├── App.js         # Main application component
│   ├── index.js       # Entry point
│   └── index.css      # Global styles with Tailwind
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Design Highlights

### Topic Selection Screen
- Animated gradient background with floating orbs
- iOS-style status bar
- Staggered fade-in animations for topic cards
- Glassmorphic card design with hover effects
- 9 radiology topics with case counts

### Case Viewer Screen
- Dark background with simulated radiograph area
- Glassmorphic text overlay panel (40% width)
- Navigation arrows with disabled states
- Progress indicator dots
- Case counter badge
- Back and close buttons
- Educational content sections:
  - Clinical Question
  - Key Findings
  - Interpretation
  - Treatment Considerations

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is an educational project for the UNC School of Dentistry.

## License

This project is for educational purposes.

## Acknowledgments

- UNC School of Dentistry
- Built with React and Tailwind CSS
- Icons by Lucide
