import { Arg, Mutation, Query,Resolver } from "type-graphql";
import { CreateAppointmentsInput } from "../dtos/inputs/crete-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
     
export class AppointmentResolvers{
    @Query(()=> String)
    async helloWord(){
        return 'hello word'
    }
    
    @Mutation(() => Appointment)
    async createAppointments(@Arg('data')data: CreateAppointmentsInput){
        const appointment = {
            startsAt: data.startsAt,
            endsAt : data.endsAt
        }

        return appointment;
    }
}
