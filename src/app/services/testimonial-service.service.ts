import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private clients = [
    {
      name: 'Milan Lee',
      des: 'He is a gold mine. He is an excellent communicator. I will be using his services for days to come. '
    },
    {
      name: 'Andrea johnson',
      des: 'I have worked with Nahian28 in the past. Whenever I have an issue, I always reach out to him and he never disappoints. Fast. Responsive. Courteous. And he gets the job done! '
    }
  ]

}
