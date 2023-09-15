interface IFormProps {
    blur: (e: React.ChangeEvent<any>) => void
    change: (e: React.ChangeEvent<any>) => void
    value: string
    error: string | undefined
    touched: boolean | undefined
    caption: string
}

const Field = ({blur, change, value, error, touched, caption} : IFormProps) => {
    return (
        <>
        <label htmlFor={caption} className="text-md mb-1 capitalize">
          {caption}
        </label>
        <input
          type={caption}
          id={caption}
          name={caption}
          className="input rounded w-full text-xl"
          onChange={change}
          onBlur={blur}
          value={value}
        />
        {touched && error ? (
          <div className="text-center dark:text-red-500 text-red-600">
            {error}
          </div>
        ) : null}
        </>
    )
}

export default Field