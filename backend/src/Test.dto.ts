import { IsNotEmpty } from 'class-validator';
export class TestDto {
  @IsNotEmpty()
  id: string;
}
// TO-DO: delete this when more DTOs are created
