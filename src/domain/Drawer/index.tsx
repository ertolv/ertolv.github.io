import React, { useState } from "react";
import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	link: {
		textDecoration: "none",
		color: "blue",
		fontSize: "20px",
	},
	icon: {
		color: "white"
	},
	paper: {
    width: 200
  }
}));

function DrawerComponent() {
	const classes = useStyles();
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<Drawer
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				classes={{paper: classes.paper}}
			>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/home" className={classes.link}>Home</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/blog" className={classes.link}>Blog</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/about" className={classes.link}>About</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<Divider />
				</List>
			</Drawer>
			<IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
				<MenuIcon />
			</IconButton>
		</>
	);
}
export default DrawerComponent;