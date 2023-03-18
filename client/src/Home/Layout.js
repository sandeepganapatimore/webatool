import { Box } from "@mui/system";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Box sx={{ mt: 10 }}>{children}</Box>
    </div>
  );
}
