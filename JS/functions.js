$(function(){
	var operation = "A"; //"A"=Adicionar; "E"=Editar

	var selected_index = -1; //Index da lista de itens selecionados

	var tbClients = localStorage.getItem("tbClients");//Retorna os dados guardados

	tbClients = JSON.parse(tbClients); //Converte string para o objeto

	if(tbClients == null) //Se não tiver dados, inicia uma array vazia
		tbClients = [];

	function Add(){
		var client = JSON.stringify({
			ID    : $("#txtID").val(),
			Investigador  : $("#nomeinvestigador").val(),
			Jogador : $("#jogador").val(),
            Ocupacao : $("#ocupacao").val(),
			Formacao : $("#formacao").val(),
            Local : $("#localnascimento").val(),
            Transtornos : $("#transtornos").val(),
            Sexo : $("#sexo").val(),
            Idade : $("#idade").val(),
            Forca : $("#forca").val(),
            Destreza : $("#destreza").val(),
            Inteligencia : $("#inteligencia").val(),
            Consti : $("#consti").val(),
            Tamanho : $("#tamanho").val(),
            Aparencia : $("#aparencia").val(),
            Sanidade : $("#sanidade").val(),
            Poder : $("#poder").val(),
            Educacao : $("#educacao").val(),
            Ideia : $("#ideia").val(),
            Sorte : $("#sorte").val(),
            Saber : $("#saber").val(),
            Mitos : $("#mitos").val(),
            Bonusdano : $("#bonusdedano").val(),
            
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Ficha salva");
		return true;
	}

	function Edit(){
		tbClients[selected_index] = JSON.stringify({
			ID    : $("#txtID").val(),
			Investigador  : $("#nomeinvestigador").val(),
			Jogador : $("#jogador").val(),
            Ocupacao : $("#ocupacao").val(),
			Formacao : $("#formacao").val(),
            Local : $("#localnascimento").val(),
            Transtornos : $("#transtornos").val(),
            Sexo : $("#sexo").val(),
            Idade : $("#idade").val(),
            Forca : $("#forca").val(),
            Destreza : $("#destreza").val(),
            Inteligencia : $("#inteligencia").val(),
            Consti : $("#consti").val(),
            Tamanho : $("#tamanho").val(),
            Aparencia : $("#aparencia").val(),
            Sanidade : $("#sanidade").val(),
            Poder : $("#poder").val(),
            Educacao : $("#educacao").val(),
            Ideia : $("#ideia").val(),
            Sorte : $("#sorte").val(),
            Saber : $("#saber").val(),
            Mitos : $("#mitos").val(),
            Bonusdano : $("#bonusdedano").val(),
            
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Tarefa editada.")
		operation = "A"; //Return to default value
		return true;
	}

	function Delete(){
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Ficha deletada.");
	}

	function List(){		
		$("#fichas").html("");
		$("#fichas").html(
			"<div>"+
			"	<div class='col-md-12'><h4 id='task-title'>Personagens</h4></div>"+
			"</div>"+
			"<div class='tasks'>"+
			"</div>"
			);
		for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
		  	$("#fichas .tasks").append(
                                         "  <div class='task'>"+
                
                                         "  <div class='col-md-11 col-sm-10'>"+
				  						 "  <h3>"+cli.Investigador+"</h3>"+
                                         "  </div>" +
                
                                         "  <div class='col-md-1 col-sm-2'>"+
                                         "    <button class='btn btn-plus' type='button' data-toggle='collapse' data-target='#"+cli.ID+"' aria-expanded='false' aria-controls="+cli.ID+"><i class='fa fa-plus-circle fa-2x'></i></button>"+
										 "  </div> "+
                
										 "  <div class='collapse' id="+cli.ID+"> " +
                                         "  <div class='col-md-6'>" +
                                         "  <h4>Informações</h4>" +
                				         "	<h5><strong>Jogador:</strong> "+cli.Jogador+" </h5> " +
                                         "  <h5><strong>Ocupação:</strong> "+cli.Ocupacao+" </h5>" + 
                                         "  <h5><strong>Formação Acadêmica:</strong> "+cli.Formacao+" </h5> " +
                                         "  <h5><strong>Local de Nascimento:</strong> "+cli.Local+" </h5> " +
                                         "  <h5><strong>Transtornos Mentais:</strong> "+cli.Transtornos+" </h5> " +
                                         "  </div>" +
                
										 "	<div id='task-des' class='col-md-6'>" +
                                         "  <h4>Caracterísiticas e Rolamento</h4>" +
                                        
                                         "	<div class='rolamentos'>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>FOR:</h6></span><p>"+cli.Forca+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>DES:</h6></span><p>"+cli.Destreza+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>INT:</h6></span><p>"+cli.Inteligencia+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>CON:</h6></span><p>"+cli.Consti+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>TAM:</h6></span><p>"+cli.Tamanho+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>APA:</h6></span><p>"+cli.Aparencia+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>SAN:</h6></span><p>"+cli.Sanidade+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>POD:</h6></span><p>"+cli.Poder+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>EDU:</h6></span><p>"+cli.Educacao+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>Ideia:</h6></span><p>"+cli.Ideia+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>Sorte:</h6></span><p>"+cli.Sorte+"</p>" +
                                         "  </div>" +
                
                                         "	<div id='task-des' class='col-md-3'>" +
                                         "  <span><h6>Saber:</h6></span><p>"+cli.Saber+"</p>" +
                                         "  </div>" +
                
										 "	<div id='task-btn' class='col-md-1'><button class='btn btn-plus btnDelete' alt='Delete"+i+"' type='button' ><i class='fa fa-trash fa-2x'></i></button></div>" +
										 "  <div class='col-md-1'><button class='btn btn-plus btnEdit' alt='Edit"+i+"' type='button' ><i class='fa fa-pencil-square fa-2x'></i></button></div>" +
                
										 "</div>"+
		  								 "</div>");
		}
	}

	$("#cadastroprojetos").bind("submit",function(){		
		if(operation == "A")
			return Add();
		else
			return Edit();
	});

	List();

	$(".btnEdit").bind("click", function(){

		operation = "E";
		selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
		
		var cli = JSON.parse(tbClients[selected_index]);
		$("#txtID").val(cli.ID);
		$("#personagem").val(cli.Personagem);
		$("#jogador").val(cli.Jogador);
        $("#raca").val(cli.Raca);        
		$("#classe").val(cli.Classe);
        $("#forca").val(cli.Forca);
        $("#destreza").val(cli.Destreza);
        $("#inteligencia").val(cli.Inteligencia);
        $("#consti").val(cli.Consti);
		$("#txtID").attr("readonly","readonly");
		$("#personagem").focus();
	});

	$(".btnDelete").bind("click", function(){
		selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
		Delete();
		List();
	});
});
function _timer(callback)
{
    var time = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var status = 0;    //    Status: timer is running or stoped
    var timer_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
        if(status == 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(time)
                    {
                        time--;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                    
                    case 1:
                    if(time < 86400)
                    {
                        time++;
                        generateTime();
                        if(typeof(callback) === 'function') callback(time);
                    }
                    break;
                }
            }, interval);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime(time);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmode)
    {
        mode = tmode;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return time;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stoped (1)
    this.getStatus
    {
        return status;
    }
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;
        var hour = Math.floor(time / 3600) % 60;
        
        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;
        hour = (hour < 10) ? '0'+hour : hour;
        
        $('div.timer span.second').html(second);
        $('div.timer span.minute').html(minute);
        $('div.timer span.hour').html(hour);
    }
}
 
// example use
var timer;
 
$(document).ready(function(e) 
{
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                alert('time out');
            }
        }
    );
    timer.reset(0);
    timer.mode(0);
});