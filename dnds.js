<body>
<img id="drag_me" src="facebook.png" draggable="true" ondragstart="drag(event)" >

<div id="holder" ondrop="drp(event)" ondragover="enableDrop(event)">

</body>
<script>
function drag(evt)
{
   evt.dataTransfer.setData("text",evt.target.id;// to access dataTransfer interface
}

function enableDrop(evt)
{
   evtt.preventDefault();// to allow elements to be dropped at destination
}

function drop(evt)
{
evt.preventDefault();
var dragged_item=evt.dataTransfer.getData("text");
   evt.target.appendChild(document.getElementById(dragged_item);//add dragged items
}                                                               //destination's DOM
</script>//dragover event if fired repeatedly while element is brought over dropzone
