const int_code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,1,9,27,31,1,31,10,35,2,13,35,39,1,39,10,43,1,43,9,47,1,47,13,51,1,51,13,55,2,55,6,59,1,59,5,63,2,10,63,67,1,67,9,71,1,71,13,75,1,6,75,79,1,10,79,83,2,9,83,87,1,87,5,91,2,91,9,95,1,6,95,99,1,99,5,103,2,103,10,107,1,107,6,111,2,9,111,115,2,9,115,119,2,13,119,123,1,123,9,127,1,5,127,131,1,131,2,135,1,135,6,0,99,2,0,14,0];

noun = int_code[1]
verb = int_code[2]

let code

function loop_inputs(){
    var inputs = { noun: -1, verb: 0 }
    do{
        code = int_code.slice(0); //reset array
        inputs = noun_verb_increment(inputs); //console.log("change inputs");
        code[1] = inputs.noun; //insert noun into reset array //console.log("Set Noun"); console.log(`${code[1]}`)
        code[2] = inputs.verb; //insert verb into reset array //console.log("Set Verb"); console.log(`${code[2]}`)
                                                                //console.log(JSON.stringify(code))
                                                                //console.log(JSON.stringify(int_code))
                                                                //console.log("run()");
        run(); //executing int_code array
    } while (!check_output());
    console.log(`noun: ${inputs.noun}, verb: ${inputs.verb}, solution: ${100 * inputs.noun + inputs.verb}`)
}

function check_output(){
    if (code[0] == 19690720){
        //console.log(`noun: ${noun}, verb: ${verb}, solution: ${100 * noun + verb}`)
       // console.log("check_output returned true")
        return true
    } else {
        //console.log("check_output returned false")
        return false
    }
}


function noun_verb_increment(current_input) {
    let {noun, verb} = current_input;
    noun++; //console.log("add one to noun");
    if (noun == 100){
        noun = 0;
        verb++;
    }
    return {noun, verb}
}

function run() {
    let pos = 0
    while (code[pos] != 99) {
        //console.log(`${pos}: ${code[pos]}`);
        //console.log("read position");
        read(pos);
        pos += 4
    }
    op_99();
}
function read(current_position) {
    if (code[current_position] == 1) {
        op_1(code[current_position + 1], code[current_position + 2], code[current_position + 3]);
        //console.log("op1")
    } else if (code[current_position] == 2) {
        op_2(code[current_position + 1], code[current_position + 2], code[current_position + 3]);
        //console.log("op2")
    } else {
        //console.log(`Unknown op_code ${code[current_position]}`)
    }
}

function op_1(input_address_a, input_address_b, output_address) {
    code[output_address] = code[input_address_a] + code[input_address_b];
}

function op_2(input_address_a, input_address_b, output_address) {
    code[output_address] = code[input_address_a] * code[input_address_b];
}

function op_99() {
   // console.log(code[0]);
}

loop_inputs();
