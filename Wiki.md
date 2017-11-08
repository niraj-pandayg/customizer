# Customization Tool/Product Designer T-Shirt, Busniness Card and Coffee Mugs.
## This file contains the description of files and folders.

### src : 
 - Consists of three subfolders: css, js and media. Also contains the index.html.
 1. index.html: This files links all the required css and js bundle for the app to render the application.

### css : 
 - Consists of global the css files.
 1. bundle.css: This file has all the built css styles for each of the components.
 2. global.css/global.css.map/global.scss: The global font style and wrapper are defined in this file.

### media : 
 - Consists of all the image files used in the application.

### js : 
 - Consists of all the java script files, and has the following folders: actions, components and stores. 
 1. app.js: The main file which renders the layout of the appication.
 2. bundle.min.js: This files contains all the built js files, this should be called in the index.html file for rendering the application.  
 3. dispatcher.js: A flux dispatcher is created here.  

#### actions :  
 1. FabricActions.js: When ever something gets updated eg: ActiveObject/canvas/side, this file would call the dispatcher and generate an console log.

#### stores :
 1. FabricStore.js: When ever something needs to be updated or called eg: ActiveObject/canvas/side, this file should be called to save the object in the flux store.

#### components : Main java script for the application in this folder.
 - Consists of three sub folders:CanvasBox, Header and Sidebar and layout.js and its css files.
 1. layout.js: This file calls the header, sidebar and canvasbox js to set the layout for the application. It usess its own .css file.

##### Header :
 1. header.js: This file creates the header for the application where one can add the header title and so on. It usess its own .css file.

##### CanvasBox : All the canvas components are this this folder.
 - Consists of three sub folders:fabric-components, Toolbar and ZoomToolBox, also CanvasBox.js,tfront.js and tback.js and its css files.
 1. CanvasBox.js: This file consists of the save image function `saveImg()`, checkbox to flip the sides of tshirt/mug/paperbag/bcard `onCheck()`.  
 2. tfront.js and tback.js: In this file we call canvas.js and create canvas with either of front or back image. Also, has component functions to do perform actions when the component has to mount and unmount.

###### fabric-components : Files which create canvas and objects on canvas are in this folder.
 1. Canvas.js: This file consists of the following functions:
 - `init()`: In this function, we initalize the canvas with certain width, height, background color and save them in the flux store. 
 - `addTshirtOverlay(src)`: In this function we create canvas using the image in "src" also set the boundaries where you can move objects on the canvas.
 - `centerCanvas()`: In this function we set the canvas to the center of the canvas box.
 2. Image.js: This file consists of the following functions:
 - `create()`: In this function, create fabric.Image, place it on the canvas with top and left coords (generally center of the canvas with size of 200x200) and set the activeObject as Image. 
 3. Text.js: This file consists of the following functions:
 - `create()`: In this function, create fabric.TextBox, place it on the canvas with top and left coords (generally center of the canvas with size of 200x200) and set the activeObject as text. 
 4. Shape.js: This file consists of the following functions:
 - `create()`: In this function, create fabric.Shape, place it on the canvas with top and left coords (generally center of the canvas with size of 200x200) and set the activeObject as Shape.     
 - In the Busniness Card Application, we create templates for the business card in this folder, the template file is similar to that of the text.js file.

###### Toolbar : 
 1. Toolbar.js: This file we render image, shape, text and template containers, by calling respective js files in the folders.
    
###### ZoomToolBox:
 1. ZoomToolBox.js: This file consists of fabric Zoom package for zooming the canvas. Also has its own css styles.

##### Sidebar:
 - Consists of Tabs Folder and Sidebar.js files
 1. Sidebar.js: This file we set the active tab which has to be displayed first on the sidebar. Also has its own css styles.

##### Tabs:
 - Consists of Image, Text, Shape and Template Folders and Tabs.js files
 1. Tabs.js: This file we set the visibility of tabs. Also has its own css styles.
 2. Image.js: In this file we create the view and fucntionality for uploading the image and rendering the uploaded image in the side bar. Has its own css files in the folder. 
 3. Text.js: In this file we create the view and fucntionality for uploading the text and change the properties of text such as color / font / etc. Has its own css files in the folder. 
 4. Shape.js: In this file we create the view and fucntionality for uploading the Shape and changing the color of the shape and its outline. Has its own css files in the folder.     
 - In the Busniness Card Application, we create templates for the business card in this folder, the template file is similar to that of the text.js file. Also, delete and edit functionality of text / shape is the respective files.

 ## How to integrate to red template:

 - Clone the PandayG Shop Websites Repository.
 - Navigate to app.route.typeA.js in `public/app/routes/default`. Then add routes for the application there.
 - Open src folder in any of the tshirt / mug / paperbag / bcard.
 - Copy contents in media folder, and paste them in `public/app/views/images/red`.
 - Then copy contents in css folder, and paste them in `public/app/views/css/red` and remane those files, eg: t.bundle.css, t.global.css, t.global.scss and t.bundle.css.map.
 - Then copy contents in js folder, and paste them in `public/app/views/js/red` and remane those files, eg: t.bundle.js, tdispatcher.js, tcomponents, etc.

 - Navigate to `public/app/views/themes/red` and create `tshirt.html`, so on. And add `spcController` and then, copy paste contents of index.html (React application) and paste the global, bundle.css links along with bundle.min.js. 
 - To add primary and secondary color themes, identify the classes and add those stylings in the tshirt.html. 