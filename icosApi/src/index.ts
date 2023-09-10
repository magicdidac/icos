import { uploadImage } from "./core"
import { failure, notFound } from "./utils"

export const handler = async (event) => {
  console.log('EVENT:', JSON.stringify(event))

  try {
    switch (event.httpMethod) {
      case 'POST':
        console.log('BODY:', event.body)
        if (event.body && event.body.route && event.body.name && event.body.image) {
          return await uploadImage(event.body.route, event.body.name, event.body.image)
        }
        return failure({ message: 'You must provide `body: { route, name, image }`' })
      default:
        console.error(`Http method (${event.httpMethod}) not supported`)
        return notFound({ message: 'Request type not defined' })
    }
  } catch (error) {
    console.error('INTERNAL ERROR IN LAMBDA', error)
    return failure({ message: 'Error. Try again later.' })
  }
}