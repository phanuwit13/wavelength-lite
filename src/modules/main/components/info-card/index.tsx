const InfoCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='rounded-xl border border-slate-700 bg-slate-800/50 p-3'>
      <div className='text-xs uppercase tracking-wider text-slate-400'>
        {label}
      </div>
      <div className='text-lg font-semibold'>{value}</div>
    </div>
  )
}

export default InfoCard