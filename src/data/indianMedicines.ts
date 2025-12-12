// Indian Medicine Database - Common medicines used in India
export interface Medicine {
  id: string
  brandName: string
  genericName: string
  strength: string
  form: 'Tablet' | 'Syrup' | 'Injection' | 'Cream' | 'Drops' | 'Capsule' | 'Suspension'
  category: string
  manufacturer: string
  price: number
  commonDosage: string
  interactions?: string[]
  contraindications?: string[]
}

export const indianMedicines: Medicine[] = [
  // Fever & Pain
  { id: '1', brandName: 'Dolo 650', genericName: 'Paracetamol', strength: '650mg', form: 'Tablet', category: 'Antipyretic', manufacturer: 'Micro Labs', price: 30, commonDosage: '1 tablet TDS' },
  { id: '2', brandName: 'Crocin', genericName: 'Paracetamol', strength: '500mg', form: 'Tablet', category: 'Antipyretic', manufacturer: 'GSK', price: 25, commonDosage: '1-2 tablets TDS' },
  { id: '3', brandName: 'Calpol', genericName: 'Paracetamol', strength: '250mg/5ml', form: 'Syrup', category: 'Antipyretic', manufacturer: 'GSK', price: 45, commonDosage: '5-10ml TDS' },
  { id: '4', brandName: 'Combiflam', genericName: 'Ibuprofen + Paracetamol', strength: '400mg+325mg', form: 'Tablet', category: 'Analgesic', manufacturer: 'Sanofi', price: 35, commonDosage: '1 tablet TDS' },
  { id: '5', brandName: 'Brufen', genericName: 'Ibuprofen', strength: '400mg', form: 'Tablet', category: 'NSAID', manufacturer: 'Abbott', price: 28, commonDosage: '1 tablet TDS after food' },
  
  // Antibiotics
  { id: '6', brandName: 'Augmentin', genericName: 'Amoxicillin + Clavulanic Acid', strength: '625mg', form: 'Tablet', category: 'Antibiotic', manufacturer: 'GSK', price: 180, commonDosage: '1 tablet BD' },
  { id: '7', brandName: 'Azithral', genericName: 'Azithromycin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', manufacturer: 'Alembic', price: 95, commonDosage: '1 tablet OD for 3 days' },
  { id: '8', brandName: 'Ciprofloxacin', genericName: 'Ciprofloxacin', strength: '500mg', form: 'Tablet', category: 'Antibiotic', manufacturer: 'Various', price: 45, commonDosage: '1 tablet BD' },
  { id: '9', brandName: 'Cefixime', genericName: 'Cefixime', strength: '200mg', form: 'Tablet', category: 'Antibiotic', manufacturer: 'Various', price: 85, commonDosage: '1 tablet BD' },
  
  // Gastric
  { id: '10', brandName: 'Pan 40', genericName: 'Pantoprazole', strength: '40mg', form: 'Tablet', category: 'PPI', manufacturer: 'Alkem', price: 65, commonDosage: '1 tablet OD before breakfast' },
  { id: '11', brandName: 'Omez', genericName: 'Omeprazole', strength: '20mg', form: 'Capsule', category: 'PPI', manufacturer: 'Dr. Reddy\'s', price: 55, commonDosage: '1 capsule OD' },
  { id: '12', brandName: 'Ranitidine', genericName: 'Ranitidine', strength: '150mg', form: 'Tablet', category: 'H2 Blocker', manufacturer: 'Various', price: 25, commonDosage: '1 tablet BD' },
  { id: '13', brandName: 'Digene', genericName: 'Antacid', strength: '10ml', form: 'Syrup', category: 'Antacid', manufacturer: 'Abbott', price: 85, commonDosage: '2 tsp after meals' },
  
  // Diabetes
  { id: '14', brandName: 'Glycomet', genericName: 'Metformin', strength: '500mg', form: 'Tablet', category: 'Antidiabetic', manufacturer: 'USV', price: 45, commonDosage: '1 tablet BD after meals' },
  { id: '15', brandName: 'Glimepiride', genericName: 'Glimepiride', strength: '1mg', form: 'Tablet', category: 'Antidiabetic', manufacturer: 'Various', price: 35, commonDosage: '1 tablet OD before breakfast' },
  
  // Hypertension
  { id: '16', brandName: 'Amlodipine', genericName: 'Amlodipine', strength: '5mg', form: 'Tablet', category: 'Antihypertensive', manufacturer: 'Various', price: 25, commonDosage: '1 tablet OD' },
  { id: '17', brandName: 'Telma', genericName: 'Telmisartan', strength: '40mg', form: 'Tablet', category: 'Antihypertensive', manufacturer: 'Glenmark', price: 95, commonDosage: '1 tablet OD' },
  { id: '18', brandName: 'Atenolol', genericName: 'Atenolol', strength: '50mg', form: 'Tablet', category: 'Beta Blocker', manufacturer: 'Various', price: 18, commonDosage: '1 tablet OD' },
  
  // Respiratory
  { id: '19', brandName: 'Montair LC', genericName: 'Montelukast + Levocetirizine', strength: '10mg+5mg', form: 'Tablet', category: 'Antiallergic', manufacturer: 'Cipla', price: 125, commonDosage: '1 tablet OD at bedtime' },
  { id: '20', brandName: 'Cetrizine', genericName: 'Cetirizine', strength: '10mg', form: 'Tablet', category: 'Antihistamine', manufacturer: 'Various', price: 15, commonDosage: '1 tablet OD' },
  { id: '21', brandName: 'Ascoril', genericName: 'Salbutamol + Guaifenesin', strength: '100ml', form: 'Syrup', category: 'Expectorant', manufacturer: 'Glenmark', price: 95, commonDosage: '2 tsp TDS' },
  
  // Vitamins & Supplements
  { id: '22', brandName: 'Becosules', genericName: 'Vitamin B Complex', strength: 'Multi', form: 'Capsule', category: 'Vitamin', manufacturer: 'Pfizer', price: 45, commonDosage: '1 capsule OD' },
  { id: '23', brandName: 'Shelcal', genericName: 'Calcium + Vitamin D3', strength: '500mg+250IU', form: 'Tablet', category: 'Supplement', manufacturer: 'Torrent', price: 85, commonDosage: '1 tablet OD' },
  { id: '24', brandName: 'Zincovit', genericName: 'Multivitamin + Minerals', strength: 'Multi', form: 'Tablet', category: 'Supplement', manufacturer: 'Apex', price: 95, commonDosage: '1 tablet OD' },
  
  // Common OTC
  { id: '25', brandName: 'Vicks Vaporub', genericName: 'Camphor + Menthol', strength: '50g', form: 'Cream', category: 'Topical', manufacturer: 'P&G', price: 125, commonDosage: 'Apply as needed' },
  { id: '26', brandName: 'Moov', genericName: 'Pain Relief Cream', strength: '50g', form: 'Cream', category: 'Topical', manufacturer: 'Reckitt', price: 145, commonDosage: 'Apply 2-3 times daily' },
  { id: '27', brandName: 'Electral', genericName: 'ORS', strength: '21.8g', form: 'Suspension', category: 'Rehydration', manufacturer: 'FDC', price: 25, commonDosage: '1 sachet in 200ml water' },
]

// Dosage frequency abbreviations
export const dosageFrequency = {
  OD: 'Once Daily',
  BD: 'Twice Daily',
  TDS: 'Three Times Daily',
  QID: 'Four Times Daily',
  SOS: 'As Needed',
  HS: 'At Bedtime',
  AC: 'Before Meals',
  PC: 'After Meals',
  STAT: 'Immediately',
}

// Common diagnosis templates
export interface DiagnosisTemplate {
  id: string
  name: string
  icd10: string
  commonMedicines: string[]
  advice: string[]
  tests?: string[]
}

export const diagnosisTemplates: DiagnosisTemplate[] = [
  {
    id: '1',
    name: 'Viral Fever',
    icd10: 'A90',
    commonMedicines: ['Dolo 650', 'Cetrizine'],
    advice: ['Rest for 3-4 days', 'Drink plenty of fluids', 'Avoid cold foods'],
    tests: ['CBC if fever persists > 3 days'],
  },
  {
    id: '2',
    name: 'Upper Respiratory Tract Infection',
    icd10: 'J06.9',
    commonMedicines: ['Azithral', 'Ascoril', 'Montair LC'],
    advice: ['Complete antibiotic course', 'Steam inhalation twice daily', 'Avoid cold drinks'],
    tests: ['Chest X-ray if symptoms persist'],
  },
  {
    id: '3',
    name: 'Gastritis',
    icd10: 'K29.7',
    commonMedicines: ['Pan 40', 'Digene'],
    advice: ['Avoid spicy food', 'Eat small frequent meals', 'Avoid alcohol'],
  },
  {
    id: '4',
    name: 'Type 2 Diabetes Mellitus',
    icd10: 'E11',
    commonMedicines: ['Glycomet', 'Glimepiride'],
    advice: ['Regular exercise', 'Low sugar diet', 'Monitor blood sugar regularly'],
    tests: ['HbA1c every 3 months', 'Fasting & PP Blood Sugar'],
  },
  {
    id: '5',
    name: 'Hypertension',
    icd10: 'I10',
    commonMedicines: ['Amlodipine', 'Telma'],
    advice: ['Low salt diet', 'Regular exercise', 'Monitor BP daily'],
    tests: ['ECG', 'Lipid Profile'],
  },
]
