const Tag = ({ tag }: { tag: string }) => {
  return (
    <div className="bg-slate-500 font-medium rounded max-w-min ml-2 first-of-type:ml-0 py-0.5 px-1.5">
      {tag}
    </div>
  )
}

export default Tag
