                                           //Ajout d'une tache
function addTask()
{
    let newTask = '<li class="ajouterTache"><button class="btnterminer"><i class="fa fa-circle-thin" aria-hidden="true"></i></button>'+task.value+'<button class="btntrash"><i class="far fa-trash-alt"></i></button></li>'
    
    taskList.innerHTML += newTask;
    
    task.select();
    task.focus();
    $(taskList).listview('refresh')

                                            //Suppression une tache


    let deleteTask = document.querySelectorAll(".btntrash")

    for (let i = 0; i < deleteTask.length; i++)
    {
        deleteTask[i].addEventListener('click', supprimertache) 
        function supprimertache()
        {
            deleteTask[i].parentElement.remove();
        }
    }

                                            //Taches terminées
    

    let finishedtask = document.querySelectorAll(".btnterminer")

    for (let j = 0; j < finishedtask.length; j++)
    {
        finishedtask[j].onclick = function()
        {
            taskList1.innerHTML += '<li class="terminerTache">'+this.parentElement.innerText+'</li>';

            $(taskList1).listview('refresh')

            finishedtask[j].parentElement.style.textDecoration = "line-through";

            finishedtask[j].style.backgroundColor = "yellowgreen";

            $(finishedtask[j].parentElement).hide('slow', function(){
                $(this).remove();
            })
        }       

    }

}

                                        //reinitialisatin une tache

function reinitialiser() 
{
    taskList.innerHTML = '';
    taskList1.innerHTML = '';
}
