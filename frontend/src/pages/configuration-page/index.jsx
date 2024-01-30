import React from "react";
import NavBar from "../../components/nav-bar";
<<<<<<< HEAD

export default function ConfigurationPage(){
    return(
<>
<NavBar/>
<main>
    <h1>Config page</h1>
</main>
</>
    )
}
=======
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import PriorityTab from "./priority-tab";

export default function ConfigurationPage() {
  return (
    <>
      <NavBar />
      <main>
      <PriorityTab />
        {/* <Tabs aria-label="Basic tabs" defaultValue={0} className="bg-theme">
          <TabList>
            <Tab style={{ color: "grey" }}>Priority</Tab>
            <Tab style={{ color: "grey" }}>Second tab</Tab>
          </TabList>
          <TabPanel value={0}>
           
          </TabPanel>
          <TabPanel value={1}>
            <b>Second</b> tab panel
          </TabPanel>
        </Tabs> */}
      </main>
    </>
  );
}
>>>>>>> f9113c7 (Latest code)
