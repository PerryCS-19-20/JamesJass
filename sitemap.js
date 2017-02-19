function buildMap(elementId){
    var theMap = document.getElementById(elementId);
    var list = document.createElement("ul");
    var listItems = document.createElement("li");
    var classProjects = document.createElement("li");
    classProjects.textContent = "Class Projects";
    var sublist = document.createElement("ul");
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("Biography", "bio.html"));
    theMap.appendChild(list);
    
    list.appendChild(classProjects);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("Breakout", "breakout.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Javascript Events", ("span.html")));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pop-Up!", "popup.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("To Do List","todolist.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic-Tac-Toe", "Tic-Tac-Toe.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Times Table", "timestable.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Adjustable Times Table", "adjustabletimestable.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pythagorean Theorem Calculator", "Calculator.html"));
    classProjects.appendChild(sublist);
    
    list.appendChild(buildList("", "Staggering_Beauty.html"));
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("Molar Mass", "MolarMassCalc/MolarCalc.html"));
    classProjects.appendChild(sublist);
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href = link;
    element.textContent = title;
    li.appendChild(element);
    return(li);
}