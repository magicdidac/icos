import { failure, notFound, success } from "./utils"

export const handler = async (event) => {
  console.log('Event:', JSON.stringify(event))
  console.log('Type:', typeof event.body)
  return success({})
  // try {
  //   switch (event.httpMethod) {
  //     case 'POST':
  //       if (event.body && event.body.name && event.body.image) {
  //         await uploadImage(event.body.name, event.body.image)
  //         return success({})
  //       }
  //       return failure({ message: 'You must provide `body: { name, image }`' })
  //     default:
  //       console.error(`Http method (${event.httpMethod}) not supported`)
  //       return notFound({ message: 'Request type not defined' })
  //   }
  // } catch (error) {
  //   console.error('INTERNAL ERROR IN LAMBDA', error)
  //   return failure({ message: 'Error. Try again later.' })
  // }
}