export type Spectrum = {
  id: string
  left: string
  right: string
  hint?: string
}

export const SPECTRA: Spectrum[] = [
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
]
