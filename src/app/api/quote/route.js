import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic server-side validation (ensure required fields exist)
    if (!body.fullName || !body.email || !body.phone || !body.pickupLocation || !body.deliveryLocation || !body.cargoType || !body.cargoWeight || !body.requiredDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure the Sanity client has a token configured for writes
    if (!process.env.SANITY_API_TOKEN) {
      console.error('SANITY_API_TOKEN is not configured in the environment variables.');
      return NextResponse.json(
        { error: 'Server Configuration Error' },
        { status: 500 }
      );
    }

    // Create a new document in Sanity
    const result = await client.create({
      _type: 'quote',
      user_fullname: body.fullName,
      user_company_name: body.companyName || '',
      user_email_address: body.email,
      user_phone_number: body.phone,
      user_whatsapp_number: body.whatsapp || '',
      user_pickup_location: body.pickupLocation,
      user_delivery_location: body.deliveryLocation,
      user_required_date: new Date(body.requiredDate).toISOString(),
      user_cargo_type: body.cargoType,
      user_estimated_weight: body.cargoWeight,
      user_container_size: body.containerSize || '',
      user_vehicle_required: body.vehicleRequired || '',
      user_instruction: body.additionalDetails || '',
    });

    return NextResponse.json(
      { message: 'Quote submitted successfully', id: result._id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting quote to Sanity:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
