import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme || "light")

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light"
    setCurrentTheme(newTheme)
    setTheme(newTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-none p-2"
    >
      {currentTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
