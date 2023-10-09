'use server';
import { revalidatePath } from "next/cache";
import { z }  from 'zod';

interface Load {
    pickupDestination: string;
    deliveryDestination: string;
};

const loadsDatabase: Array<Load> = [];

export async function createLoad(prevState: any, formData: FormData) {
    const schema = z.object({
        pickupDestination: z.string().min(1),
        deliveryDestination: z.string().min(1),
    });

    const newLoad = schema.parse({
        pickupDestination: formData.get('pickupDestination'),
        deliveryDestination: formData.get('deliveryDestination'),
    });

    try {
        // Artificial 2 second database delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        loadsDatabase.push(newLoad);
        console.log("Current loads: ", loadsDatabase);

        revalidatePath('/load');
        return {
            message: 'New load created',
        };
    }
    catch (err) {
        return {
            message: 'Error creating new load',
        }
    }
}