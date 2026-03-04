const express=require("express");
const fs=require("fs");
const path=require("path");

const router=express.router();

const miniprojectsPath=path.join(__dirname,"mini-projects");

//read All
fs.readdirSync(miniprojectsPath).forEach((folder)=>{
    const projectpath=path.join(miniprojectsPath,folder);

    if(fs.existsSync(path.join(projectpath,"routes.js")))
    {
        const projectRoutes=require(path.join(projectpath,"routes"));
        router.use(`/&{folder}`,projectRoutes);

        router.use(
            `/${folder}`,
            express.static(path.join(projectpath,"public"))
        );
    }
});