import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowLeft,
  Battery,
  Wifi,
  Signal
} from 'lucide-react';

// Sample data for radiology cases
const RADIOLOGY_TOPICS = [
  { id: 1, name: 'Periapical and Bitewings Radiographs', caseCount: 12 },
  { id: 2, name: 'Panoramic Radiographs', caseCount: 8 },
  { id: 3, name: 'Intraoral Radiographic Quality Evaluation', caseCount: 15 },
  { id: 4, name: 'Radiographic Interpretation', caseCount: 20 },
  { id: 5, name: 'Radiographic Anomalies', caseCount: 10 },
  { id: 6, name: 'Presentation of Oral Pathologies', caseCount: 18 },
  { id: 7, name: 'Pediatric Radiographic Interpretation', caseCount: 9 },
  { id: 8, name: 'Buccal Object Rule (BOR)', caseCount: 6 },
  { id: 9, name: 'Cone Beam Computed Tomography (CBCT)', caseCount: 14 },
];

const SAMPLE_CASES = [
  {
    id: 1,
    title: 'Periapical Lesion Assessment',
    image: 'Case 1',
    content: {
      clinicalQuestion: 'What radiographic features suggest a periapical abscess versus a cyst?',
      keyFindings: [
        'Radiolucent area at apex of tooth #19',
        'Loss of lamina dura',
        'Well-defined borders suggest chronicity',
        'Size approximately 8mm in diameter'
      ],
      interpretation: 'The well-circumscribed radiolucency at the apex with loss of lamina dura is consistent with a chronic periapical lesion. The defined borders and size suggest a possible periapical cyst (radicular cyst), though definitive diagnosis requires histopathological examination.',
      treatment: [
        'Endodontic evaluation and treatment of involved tooth',
        'If endodontic treatment fails, surgical enucleation may be necessary',
        'Follow-up radiographs at 3, 6, and 12 months to assess healing',
        'Consider biopsy if lesion does not respond to treatment'
      ]
    }
  },
  {
    id: 2,
    title: 'Panoramic Anomaly Identification',
    image: 'Case 2',
    content: {
      clinicalQuestion: 'Identify the developmental anomaly present in this panoramic radiograph.',
      keyFindings: [
        'Supernumerary tooth (mesiodens) between maxillary central incisors',
        'Inverted orientation of supernumerary tooth',
        'Normal root development of adjacent permanent teeth',
        'No evidence of pathology or resorption'
      ],
      interpretation: 'An inverted mesiodens is present in the anterior maxilla. This is the most common type of supernumerary tooth, occurring in approximately 1-3% of the population. The inverted position may prevent eruption and could potentially cause complications with adjacent teeth.',
      treatment: [
        'Monitor eruption pattern of permanent incisors',
        'Consider extraction if mesiodens causes crowding or eruption problems',
        'Orthodontic consultation for space management',
        'Surgical removal typically recommended before age 8-10 for optimal outcomes'
      ]
    }
  },
  {
    id: 3,
    title: 'Caries Detection and Classification',
    image: 'Case 3',
    content: {
      clinicalQuestion: 'Assess the depth and severity of carious lesions in this bitewing radiograph.',
      keyFindings: [
        'Radiolucency on distal of tooth #30 extending to DEJ',
        'Interproximal lesion on mesial of tooth #19 in outer third of enamel',
        'No evidence of pulpal involvement',
        'Intact lamina dura around all visible teeth'
      ],
      interpretation: 'Multiple carious lesions identified at different stages. Tooth #30 shows a moderate lesion (Class II caries) that has reached the dentinoenamel junction and may have slight dentin penetration. Tooth #19 shows an incipient lesion (Class I caries) limited to enamel. Early detection allows for conservative treatment options.',
      treatment: [
        'Tooth #30: Direct composite restoration indicated',
        'Tooth #19: Remineralization protocol with fluoride therapy',
        'Dietary counseling and oral hygiene instruction',
        'Follow-up bitewings in 6-12 months to monitor progression',
        'Consider caries risk assessment and preventive measures'
      ]
    }
  }
];

// iOS Status Bar Component
const IOSStatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  }).slice(0, 5);

  return (
    <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-xs font-semibold">
      <div className="flex items-center gap-1">
        <span>{currentTime}</span>
      </div>
      <div className="flex items-center gap-1">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3 h-3" />
        <Battery className="w-3 h-3" />
      </div>
    </div>
  );
};

// Floating Background Orbs
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute top-20 left-10 w-64 h-64 bg-unc-blue/30 rounded-full blur-3xl"
      style={{ animation: 'float 6s ease-in-out infinite' }}
    />
    <div
      className="absolute bottom-32 right-10 w-96 h-96 bg-unc-navy/20 rounded-full blur-3xl"
      style={{ animation: 'float 8s ease-in-out infinite 2s' }}
    />
    <div
      className="absolute top-1/2 left-1/3 w-48 h-48 bg-unc-blue/20 rounded-full blur-2xl"
      style={{ animation: 'float 7s ease-in-out infinite 1s' }}
    />
  </div>
);

// Topic Card Component
const TopicCard = ({ topic, index, onClick }) => (
  <div
    onClick={onClick}
    className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl
               transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:bg-white"
    style={{
      animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-unc-blue/5 to-transparent rounded-3xl
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative">
      <h3 className="text-lg font-semibold text-unc-navy mb-2 group-hover:text-unc-blue transition-colors">
        {topic.name}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          {topic.caseCount} cases
        </span>
        <div className="w-8 h-8 rounded-full bg-unc-blue/10 flex items-center justify-center
                        group-hover:bg-unc-blue group-hover:text-white transition-all">
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
);

// Menu Screen Component
const MenuScreen = ({ onTopicSelect }) => (
  <div className="min-h-screen bg-gradient-to-br from-unc-navy via-unc-blue/80 to-unc-navy relative overflow-hidden">
    <IOSStatusBar />
    <FloatingOrbs />

    <div className="relative z-10 px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md
                        rounded-3xl mb-4 shadow-xl">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Oral Radiology
        </h1>
        <p className="text-white/80 text-sm">
          UNC School of Dentistry
        </p>
      </div>

      {/* Topic Cards Grid */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {RADIOLOGY_TOPICS.map((topic, index) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            index={index}
            onClick={() => onTopicSelect(topic)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-white/60 text-sm">
        Swipe or tap to explore cases
      </div>
    </div>
  </div>
);

// Case Viewer Screen Component
const CaseViewerScreen = ({ onBack }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const currentCase = SAMPLE_CASES[currentCaseIndex];

  const handlePrevious = () => {
    if (currentCaseIndex > 0) {
      setCurrentCaseIndex(currentCaseIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentCaseIndex < SAMPLE_CASES.length - 1) {
      setCurrentCaseIndex(currentCaseIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <IOSStatusBar />

      {/* Main Content */}
      <div className="relative h-[calc(100vh-32px)]">
        {/* Simulated Radiograph Image Area */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl
                              shadow-2xl flex items-center justify-center mb-4 border-2 border-gray-500">
                <span className="text-6xl font-bold text-gray-400">{currentCase.image}</span>
              </div>
              <p className="text-gray-400 text-sm">Radiographic Image Placeholder</p>
            </div>
          </div>
        </div>

        {/* Text Overlay Panel - Right Side */}
        <div className="absolute right-0 top-0 bottom-20 w-[40%] bg-gradient-to-br from-unc-blue/95 to-unc-navy/95
                        backdrop-blur-xl shadow-2xl overflow-y-auto">
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {currentCase.title}
            </h2>

            {/* Clinical Question */}
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white/80 mb-2">Clinical Question</h3>
              <p className="text-white text-sm leading-relaxed">
                {currentCase.content.clinicalQuestion}
              </p>
            </div>

            {/* Key Findings */}
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white/80 mb-2">Key Findings</h3>
              <ul className="space-y-2">
                {currentCase.content.keyFindings.map((finding, idx) => (
                  <li key={idx} className="text-white text-sm flex items-start">
                    <span className="text-white/60 mr-2">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interpretation */}
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white/80 mb-2">Interpretation</h3>
              <p className="text-white text-sm leading-relaxed">
                {currentCase.content.interpretation}
              </p>
            </div>

            {/* Treatment Considerations */}
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-white/80 mb-2">Treatment Considerations</h3>
              <ul className="space-y-2">
                {currentCase.content.treatment.map((item, idx) => (
                  <li key={idx} className="text-white text-sm flex items-start">
                    <span className="text-white/60 mr-2">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          disabled={currentCaseIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md flex items-center justify-center
                     transition-all duration-300 shadow-lg
                     ${currentCaseIndex === 0
                       ? 'opacity-30 cursor-not-allowed'
                       : 'hover:bg-white/20 hover:scale-110 cursor-pointer'}`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentCaseIndex === SAMPLE_CASES.length - 1}
          className={`absolute left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md flex items-center justify-center
                     transition-all duration-300 shadow-lg
                     ${currentCaseIndex === SAMPLE_CASES.length - 1
                       ? 'opacity-30 cursor-not-allowed'
                       : 'hover:bg-white/20 hover:scale-110 cursor-pointer'}`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Close Button */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md
                     flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg z-20"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Progress Indicator Dots */}
        <div className="absolute bottom-16 left-1/4 -translate-x-1/2 flex gap-2">
          {SAMPLE_CASES.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentCaseIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Case Counter Badge */}
        <div className="absolute bottom-4 left-1/4 -translate-x-1/2 px-4 py-2 rounded-full
                        bg-white/10 backdrop-blur-md shadow-lg">
          <span className="text-white text-sm font-semibold">
            Case {currentCaseIndex + 1} of {SAMPLE_CASES.length}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const handleTopicSelect = () => {
    setCurrentScreen('viewer');
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  return (
    <div className="font-sans">
      {currentScreen === 'menu' ? (
        <MenuScreen onTopicSelect={handleTopicSelect} />
      ) : (
        <CaseViewerScreen onBack={handleBackToMenu} />
      )}
    </div>
  );
}

export default App;
