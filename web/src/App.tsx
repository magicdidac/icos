import { MyRoutes } from "./routes"
import { Header } from "./components/common/Header"
import { NotificationProvider, PositionX, PositionY } from "@magicdidac/notifications"
import { useIsMobile } from "./hooks/isMobile"

export const App = () => {
  const isMobile = useIsMobile()

  return (
    <NotificationProvider positionY={PositionY.top} positionX={isMobile ? PositionX.center : PositionX.right} width={isMobile ? '75vw' : '400px'}>
      <Header />
      <div style={{ marginTop: '2rem 0' }}>
        <MyRoutes />
      </div>
    </NotificationProvider>
  )
}