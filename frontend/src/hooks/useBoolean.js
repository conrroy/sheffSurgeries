import { useState } from "react"

const useBoolean = (val = false) => {
  const [state, setState] = useState(val)
  const on = () => setState(true)
  const off = () => setState(false)
  const toggle = () => setState(!state)
  return [state, { on, off, toggle }]
}

export default useBoolean