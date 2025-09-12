export type Spectrum = {
  id: string
  left: string
  right: string
  hint?: string
}

export const SPECTRA: Spectrum[] = [
  // ชุดดั้งเดิม
  { id: 'spicy', left: 'ไม่เผ็ด', right: 'เผ็ดมาก' },
  { id: 'noise', left: 'เงียบมาก', right: 'เสียงดังมาก' },
  { id: 'risk', left: 'ปลอดภัย', right: 'เสี่ยงมาก' },
  { id: 'clean', left: 'ซับซ้อน', right: 'เรียบง่าย' },
  { id: 'price', left: 'ถูก', right: 'แพง' },
  { id: 'age', left: 'เก่า', right: 'ใหม่' },
  { id: 'speed', left: 'ช้า', right: 'เร็ว' },
  { id: 'light', left: 'มืด', right: 'สว่าง' },
  { id: 'health', left: 'ไม่ดีต่อสุขภาพ', right: 'ดีต่อสุขภาพ' },
  { id: 'formality', left: 'กันเอง', right: 'ทางการ' },

  // ต่างกันชัดเจน
  { id: 'truthLie', left: 'โกหก', right: 'ความจริง' },
  { id: 'hotCold', left: 'หนาวจัด', right: 'ร้อนจัด' },
  { id: 'wetDry', left: 'เปียก', right: 'แห้ง' },
  { id: 'dayNight', left: 'กลางคืน', right: 'กลางวัน' },
  { id: 'earthSky', left: 'พื้นดิน', right: 'ท้องฟ้า' },
  { id: 'lifeDeath', left: 'ตาย', right: 'มีชีวิต' },
  { id: 'yesNo', left: 'ไม่ใช่', right: 'ใช่' },
  { id: 'northSouth', left: 'เหนือ', right: 'ใต้' },
  { id: 'richPoor', left: 'ยากจน', right: 'ร่ำรวย' },
  { id: 'oldYoung', left: 'เด็ก', right: 'ผู้ใหญ่' },

  // ใกล้กัน/นิวานซ์เล็ก
  { id: 'happyJoyful', left: 'พอใจ', right: 'สุขใจ' },
  { id: 'angryAnnoyed', left: 'รำคาญ', right: 'โกรธ' },
  { id: 'hungryPeckish', left: 'หิวเล็กน้อย', right: 'หิวจัด' },
  { id: 'warmHot', left: 'อุ่น', right: 'ร้อน' },
  { id: 'coolCold', left: 'เย็น', right: 'หนาว' },
  { id: 'fastQuick', left: 'เร็ว', right: 'ไวมาก' },
  { id: 'slowLazy', left: 'ช้า', right: 'เชื่องช้า' },
  { id: 'quietCalm', left: 'สงบ', right: 'เงียบสนิท' },
  { id: 'brightShiny', left: 'สว่าง', right: 'แสบตา' },
  { id: 'softSmooth', left: 'นุ่ม', right: 'นุ่มลื่น' },

  // ต่างชัดเจน
  { id: 'leftRight', left: 'ซ้าย', right: 'ขวา' },
  { id: 'upDown', left: 'บน', right: 'ล่าง' },
  { id: 'emptyFull', left: 'ว่าง', right: 'เต็ม' },
  { id: 'openClosed', left: 'เปิด', right: 'ปิด' },
  { id: 'aliveDead', left: 'ตาย', right: 'มีชีวิต' },
  { id: 'blackWhite', left: 'ดำ', right: 'ขาว' },
  { id: 'maleFemale', left: 'ผู้ชาย', right: 'ผู้หญิง' },
  { id: 'winLose', left: 'แพ้', right: 'ชนะ' },
  { id: 'successFail', left: 'ล้มเหลว', right: 'สำเร็จ' },
  { id: 'loveHate', left: 'เกลียด', right: 'รัก' },

  // ใกล้เคียง
  { id: 'smileLaugh', left: 'ยิ้ม', right: 'หัวเราะ' },
  { id: 'walkRun', left: 'เดิน', right: 'วิ่ง' },
  { id: 'sitRest', left: 'นั่ง', right: 'เอนตัว' },
  { id: 'shineGlow', left: 'เปล่งแสง', right: 'ส่องประกาย' },
  { id: 'singHum', left: 'ฮัมเพลง', right: 'ร้องเพลง' },
  { id: 'drawSketch', left: 'สเก็ตช์', right: 'วาดรูป' },
  { id: 'writeType', left: 'เขียนมือ', right: 'พิมพ์' },
  { id: 'callChat', left: 'โทร', right: 'แชท' },
  { id: 'studyRead', left: 'อ่าน', right: 'เรียน' },
  { id: 'teachExplain', left: 'สอน', right: 'อธิบาย' },

  // ชุด contrast & nuance ปนกัน
  { id: 'deepShallow', left: 'ตื้น', right: 'ลึก' },
  { id: 'wideNarrow', left: 'กว้าง', right: 'แคบ' },
  { id: 'tallShort', left: 'เตี้ย', right: 'สูง' },
  { id: 'thinThick', left: 'บาง', right: 'หนา' },
  { id: 'hardSoft', left: 'แข็ง', right: 'นุ่ม' },
  { id: 'roughSmooth', left: 'หยาบ', right: 'เรียบ' },
  { id: 'cleanDirty', left: 'สะอาด', right: 'สกปรก' },
  { id: 'freshStale', left: 'สดใหม่', right: 'เหม็นอับ' },
  { id: 'sweetBitter', left: 'หวาน', right: 'ขม' },
  { id: 'saltySour', left: 'เค็ม', right: 'เปรี้ยว' },

  // นิวานซ์
  { id: 'calmRelaxed', left: 'สงบ', right: 'ผ่อนคลาย' },
  { id: 'busyActive', left: 'ยุ่ง', right: 'วุ่นวาย' },
  { id: 'tidyNeat', left: 'เป็นระเบียบ', right: 'เรียบร้อย' },
  { id: 'messyCluttered', left: 'รก', right: 'เละเทะ' },
  { id: 'focusedAlert', left: 'มีสมาธิ', right: 'ตื่นตัว' },
  { id: 'sleepyDrowsy', left: 'ง่วง', right: 'ง่วงมาก' },
  { id: 'happyExcited', left: 'ดีใจ', right: 'ตื่นเต้น' },
  { id: 'sadLonely', left: 'เศร้า', right: 'เหงา' },
  { id: 'hopefulConfident', left: 'มีหวัง', right: 'มั่นใจ' },
  { id: 'shyQuiet', left: 'ขี้อาย', right: 'เงียบ' },

  // เพิ่มเติมให้ครบ ~100
  { id: 'fastSlow', left: 'ช้า', right: 'เร็ว' },
  { id: 'cheapExpensive', left: 'ถูก', right: 'แพง' },
  { id: 'weakStrong', left: 'อ่อนแอ', right: 'แข็งแรง' },
  { id: 'thinFat', left: 'ผอม', right: 'อ้วน' },
  { id: 'youngOld', left: 'เด็ก', right: 'แก่' },
  { id: 'quietLoud', left: 'เบา', right: 'ดัง' },
  { id: 'shortLong', left: 'สั้น', right: 'ยาว' },
  { id: 'closeFar', left: 'ใกล้', right: 'ไกล' },
  { id: 'insideOutside', left: 'ใน', right: 'นอก' },
  { id: 'startEnd', left: 'เริ่ม', right: 'จบ' },
]
