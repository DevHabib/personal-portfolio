import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService
{
  private clients = [
    {
      name: 'Milan Lee',
      des: 'He is a gold mine. He is an excellent communicator. I will be using his services for days to come. '
    },
    {
      name: 'Sukanta Purkayasta',
      des: 'Habibur Rahman is a creative frontend developer. Highly skilled with different frontend technology. I worked with him in the same project thats why i was able to complete the backened of the project too fast.I wish your best luck Habibur Rahman.'
    },
    {
      name: 'Amimul Ihsan',
      des: 'Habib is a very good goal-oriented professional web developer. His experience in front-end technologies is excellent and he manages time accurately. Always recommended.'
    },
    {
      name: 'Hasan Misbah',
      des: 'Habib is a true professional and talented web Designer. He is well organized, diligent, and a fast learner. I’m sure he will be an asset to the next organization he joins. I am happy to call him my friend instead of telling my teammate. I have a chance to work with him and Its my pleasure to get an opportunity to work with him.'
    }
  ]

}
