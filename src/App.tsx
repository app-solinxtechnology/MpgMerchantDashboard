import AdminRouting from "$Nat"
import { Toaster } from "react-hot-toast"



const App = () => {
  return (
    <div>
          <Toaster
        containerStyle={{
          width: "auto",
        }}
        toastOptions={{ style: { maxWidth: "100%" }, duration: 6000 }}
      />
        <AdminRouting/>
    </div>
  )
}

export default App
