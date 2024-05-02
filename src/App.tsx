import AdminRouting from "$Nat"
import { Toaster } from "react-hot-toast"



const App = () => {
  return (
    <div>
      <Toaster
        containerStyle={{
          width: "500px",
          margin:"0 auto",
          zIndex:500000000000000
        }}
        toastOptions={{ style: { maxWidth: "100%"}, duration: 6000 }}
      />
        <AdminRouting/>
    </div>
  )
}

export default App
