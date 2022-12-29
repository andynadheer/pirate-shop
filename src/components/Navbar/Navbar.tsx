import React, { FC } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalGroceryStoreTwoToneIcon from "@mui/icons-material/LocalGroceryStoreTwoTone";
import Paper from "@mui/material/Paper";
import DirectionsBoatFilledTwoToneIcon from "@mui/icons-material/DirectionsBoatFilledTwoTone";
import ReceiptLongTwoToneIcon from "@mui/icons-material/ReceiptLongTwoTone";

import "./Navbar.scss";

const Navbar: FC<Props> = ({
  selectedNavItem,
  navItems,
  onPageChange,
}: Props) => {
  const [value, setValue] = React.useState(selectedNavItem);

  React.useEffect(() => {
    setValue(selectedNavItem);
  }, [selectedNavItem]);

  return (
    <Box className="navbar-block">
      <Box sx={{ pb: 7 }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              onPageChange && onPageChange(newValue);
              setValue(newValue);
            }}
            className="bottom-nav__actions"
          >
            <BottomNavigationAction
              label="Produkter"
              icon={<DirectionsBoatFilledTwoToneIcon />}
            />
            <BottomNavigationAction
              label="Varukorg"
              icon={<LocalGroceryStoreTwoToneIcon />}
            />
            <BottomNavigationAction
              label="Checkout"
              icon={<ReceiptLongTwoToneIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Box>
  );
};

export interface INavItem {
  label: string;
  icon: string;
}

export interface Props {
  selectedNavItem: number;
  navItems: INavItem[];
  onPageChange?: (page: any) => void;
}

export default Navbar;
