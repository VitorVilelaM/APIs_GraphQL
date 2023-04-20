import {Field,InputType} from 'type-graphql'

@InputType() 
export class CreateAppointmentsInput{
    @Field()
    customerId: String
 
    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}