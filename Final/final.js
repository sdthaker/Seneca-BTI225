var courseList=[
    {courseCode:"BTP100", courseName:"Programming Fundamentals Using C",
    courseOutline:"https://ict.senecacollege.ca/course/btp100"},
    {courseCode:"BTI225", courseName:"Web Programming Principles",
    courseOutline:"https://ict.senecacollege.ca/course/bti225"},
    {courseCode:"BTI325", courseName:"Web Programming Tools and Frameworks",
    courseOutline:"https://ict.senecacollege.ca/course/bti325"},
    {courseCode:"BTI425", courseName:"Web Programming for Apps and Services",
    courseOutline:"https://ict.senecacollege.ca/course/bti425"}
];

function search(){
    var cc = document.getElementById('courseCode');

    if(cc.value == ''){
        var table = document.getElementById('tbl');

        var existingTableBody = document.querySelector('tbody');
        if(existingTableBody) table.removeChild(existingTableBody);
        
        var existingTableHead = document.querySelector('thead');
        if(existingTableHead) table.removeChild(existingTableHead);

        var tbody = document.createElement('tbody');

        var thead = document.createElement('thead');
        var trHead = document.createElement('tr');

        trHead.appendChild(getThElement('Course Code'));
        trHead.appendChild(getThElement('Course Name'));
        trHead.appendChild(getThElement('Course Outline'));
        thead.appendChild(trHead);

        table.appendChild(thead);

        var tr = [];
        
        for(var i = 0; i < 4; i++){
            tr[i] = document.createElement('tr');
            tr[i].appendChild(getTdElement(courseList[i].courseCode));
            tr[i].appendChild(getTdElement(courseList[i].courseName));
            tr[i].appendChild(getTdElement(courseList[i].courseOutline));
            tbody.appendChild(tr[i]);
        }
        table.appendChild(tbody);

        table.style.borderCollapse = "seperate";
        table.style.borderSpacing = "2px";
        table.style.border = "blue solid 2px";
    }
    else{
        ccValue = cc.value;

        if (ccValue.toUpperCase() === 'BTI') {
            var table = document.getElementById('tbl');

            var existingTableBody = document.querySelector('tbody');
            if(existingTableBody) table.removeChild(existingTableBody);
            
            var existingTableHead = document.querySelector('thead');
            if(existingTableHead) table.removeChild(existingTableHead);

            var tbody = document.createElement('tbody');

            var thead = document.createElement('thead');
            var trHead = document.createElement('tr');
    
            trHead.appendChild(getThElement('Course Code'));
            trHead.appendChild(getThElement('Course Name'));
            trHead.appendChild(getThElement('Course Outline'));
            thead.appendChild(trHead);
    
            table.appendChild(thead);

            for(var i = 1; i < 4; i++){
                var tr = document.createElement('tr');
                tr.appendChild(getTdElement(courseList[i].courseCode));
                tr.appendChild(getTdElement(courseList[i].courseName));
                tr.appendChild(getTdElement(courseList[i].courseOutline));
                tbody.appendChild(tr);
                table.appendChild(tbody);
            }

            table.style.borderCollapse = "seperate";
            table.style.borderSpacing = "2px";
            table.style.border = "blue solid 2px";
        }
        else {
            var table = document.getElementById('tbl');

            var existingTableBody = document.querySelector('tbody');
            if(existingTableBody) table.removeChild(existingTableBody);
            
            var existingTableHead = document.querySelector('thead');
            if(existingTableHead) table.removeChild(existingTableHead);

            var tbody = document.createElement('tbody');

            var thead = document.createElement('thead');
            var trHead = document.createElement('tr');

            trHead.appendChild(getThElement('Course Code'));
            trHead.appendChild(getThElement('Course Name'));
            trHead.appendChild(getThElement('Course Outline'));
            thead.appendChild(trHead);

            table.appendChild(thead);
            var tr = document.createElement('tr');
            tr.appendChild(getTdElement(courseList[0].courseCode));
            tr.appendChild(getTdElement(courseList[0].courseName));
            tr.appendChild(getTdElement(courseList[0].courseOutline));
            tbody.appendChild(tr);
            table.appendChild(tbody);
        }

        table.style.borderCollapse = "seperate";
        table.style.borderSpacing = "2px";
        table.style.border = "blue solid 2px";
    }
}

function getTdElement(text) {
    var td = document.createElement('td');
    td.innerHTML = text;
    return td;
}

function getThElement(text) {
    var th = document.createElement('th');
    th.innerHTML = text;
    return th;
}

function clearSearch(){
    document.getElementById('tbl').innerHTML = '';
    document.getElementById('tbl').style.border = "none";
}

function valid(){
    return check(true);
}

function check(flag){
    if(flag) {
        var span = document.getElementById('sName');
        var sName = document.getElementById('name');

        var regEx = /^[a-zA-Z' ]+$/;

        if(regEx.test(sName.value)){
            span.innerHTML = '';
            sName.style.border = "gray 0.5px solid";
            return true;
        }

        if(sName.value == ''){
            span.innerHTML = '';
            sName.style.border = "gray 0.5px solid";
            return false;
        }
        else{
            span.innerHTML = '<= Valid characters for Name only include: alphabet uppercase, lowercase, apostrope(`), and white space';
            sName.style.border = "red solid 2px";
            return false;
        }
    }
    else{
        var span = document.getElementById('sName');
        var sName = document.getElementById('name');

        span.innerHTML = '';
        sName.style.border = "gray 0.5px solid";
    }
}