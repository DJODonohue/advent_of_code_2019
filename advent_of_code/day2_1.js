const int_code = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,2,9,19,23,1,23,6,27,1,13,27,31,1,31,10,35,1,9,35,39,1,39,9,43,2,6,43,47,1,47,5,51,2,10,51,55,1,6,55,59,2,13,59,63,2,13,63,67,1,6,67,71,1,71,5,75,2,75,6,79,1,5,79,83,1,83,6,87,2,10,87,91,1,9,91,95,1,6,95,99,1,99,6,103,2,103,9,107,2,107,10,111,1,5,111,115,1,115,6,119,2,6,119,123,1,10,123,127,1,127,5,131,1,131,2,135,1,135,5,0,99,2,0,14,0];

int_code[1] = 12
int_code[2] = 2

let pos = 0
function run(){
    while(int_code[pos] != 99){
        console.log(`${pos}: ${int_code[pos]}`);
        read(pos);
    }
    op_99();
}
function read(current_position){
    if(int_code[current_position] == 1){
        op_1(int_code[current_position+1],int_code[current_position+2],int_code[current_position+3]);
        pos += 4;
    } else if(int_code[current_position] == 2){
        op_2(int_code[current_position+1],int_code[current_position+2],int_code[current_position+3]);
        pos += 4;
    }
}

function op_1(input_address_a,input_address_b,output_address){
    int_code[output_address] = int_code[input_address_a] + int_code[input_address_b];
}

function op_2(input_address_a,input_address_b,output_address){
    int_code[output_address] = int_code[input_address_a] * int_code[input_address_b];
}

function op_99(){
    console.log(int_code[0]);
}

run()
