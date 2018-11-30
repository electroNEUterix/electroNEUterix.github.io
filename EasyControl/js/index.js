
//cpf code

var SMS0;
var SMS1;
var SMS2;
var SMS3;
 setup();
 
function ALACOHOL_Sensor_Get() {
  var ALACOHOL_Sensor_GetValue = cpf.get("A0");
  ui.set("A0", ALACOHOL_Sensor_GetValue);		
  return  ALACOHOL_Sensor_GetValue;
}
 
function LightSensorGet() {
  var LightSensorGetValue = cpf.get("A1");
  ui.set("A1", LightSensorGetValue);
  return  LightSensorGetValue;
}
 
function LoundnessSensorGet() {
  var LoundnessSensorGetValue = cpf.get("A2");
  ui.set("A2", LoundnessSensorGetValue);
  return  LoundnessSensorGetValue;
}
 
function LuminaceSensorGet() {
  var LuminaceSensorGetValue = cpf.get("A3");
  ui.set("A3", LuminaceSensorGetValue);
  return  LuminaceSensorGetValue;
}
 

ui.set("title",'TEST: SMS + Relay(solenoid valve)');

  SMS0 = ALACOHOL_Sensor_Get();
  if (SMS0 >= 0 && SMS0 <= 650) {
    cpf.set("D2",1);
    ui.set("D2",1);
    cpf.set("D3",1);
    ui.set("D3",1);
	var element = document.getElementById("plant");
	element.classList.toggle("on");
	var element = document.getElementById("plantt");
	element.classList.toggle("dry");
  } 
  else {
    cpf.set("D2",0);
    ui.set("D2",0);
    cpf.set("D3",0);
    ui.set("D3",0);
	var element = document.getElementById("plant");
	element.classList.toggle("wet");
  }
 
cpf.repeat();
  SMS1 = LightSensorGet();
  if (SMS1 >= 0 && SMS1 <= 650) {
    cpf.set("D2",1);
    ui.set("D2",1);
    cpf.set("D4",1);
    ui.set("D4",1);
		var element = document.getElementById("plant2");
	element.classList.toggle("on");
	var element = document.getElementById("plantt2");
	element.classList.toggle("dry");
  } 
  else {
    cpf.set("D2",0);
    ui.set("D2",0);
    cpf.set("D4",0);
    ui.set("D4",0);
		var element = document.getElementById("plantt2");
	element.classList.toggle("wet");
	
  }
 
cpf.repeat();
  SMS2 = LoundnessSensorGet();
  if (SMS2 >= 0 && SMS2 <= 650) {
    cpf.set("D2",1);
    ui.set("D2",1);
    cpf.set("D7",1);
    ui.set("D7",1);
	var element = document.getElementById("plant3");
	element.classList.toggle("on");
	var element = document.getElementById("plantt3");
	element.classList.toggle("dry");
  } 
  {
    cpf.set("D2",0);
    ui.set("D2",0);
    cpf.set("D7",0);
    ui.set("D7",0);
		var element = document.getElementById("plant3");
	element.classList.toggle("wet");
  }
 
cpf.repeat();
  ui.set("title",'TEST: SMS + Relay');
  SMS3 = LuminaceSensorGet();
  if (SMS3 >= 0 && SMS3 <= 316) {
    cpf.set("D2",1);
    ui.set("D2",1);
    cpf.set("D8",1);
    ui.set("D8",1);
	var element = document.getElementById("plant4");
	element.classList.toggle("on");
	var element = document.getElementById("plantt4");
	element.classList.toggle("dry");
  } 
  else {
    cpf.set("D2",0);
    ui.set("D2",0);
    cpf.set("D8",0);
    ui.set("D8",0);
		var element = document.getElementById("plant4");
	element.classList.toggle("wet");
  }
 
 
 
cpf.repeat();

function setup(){
		if(cpf)
cpf.pinreset("[\"resetPin\"],[\"setPinMode\", \"analog\", 0,\"INPUT\"],[\"setPinMode\", \"digital\", 2,\"OUTPUT\"],[\"setPinMode\", \"digital\", 3,\"OUTPUT\"],[\"setPinMode\", \"analog\", 1,\"INPUT\"],[\"setPinMode\", \"digital\", 4,\"OUTPUT\"],[\"setPinMode\", \"analog\", 2,\"INPUT\"],[\"setPinMode\", \"digital\", 7,\"OUTPUT\"],[\"setPinMode\", \"analog\", 3,\"INPUT\"],[\"setPinMode\", \"digital\", 8,\"OUTPUT\"]");
 
cpf.uireset("[\"uiresetPin\"],[\"analog\", 0,\"INPUT\",\"Alcohol Sensor(A)\",\"img-alcohol\"],[\"digital\", 2,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"digital\", 3,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"analog\", 1,\"INPUT\",\"Light Sensor\",\"img-ext_lightsensor\"],[\"digital\", 4,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"analog\", 2,\"INPUT\",\"Loudness Sensor\",\"img-loudness\"],[\"digital\", 7,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"],[\"analog\", 3,\"INPUT\",\"Luminace Sensor\",\"img-luminanace\"],[\"digital\", 8,\"OUTPUT\",\"SPDT Relay \",\"img-spdt_relay\"]");
}

//
