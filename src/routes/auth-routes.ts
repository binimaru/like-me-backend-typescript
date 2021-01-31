import { Router } from 'express';
import { signUp } from '../controllers/auth-controller';

const router = Router();

router.put('/sign-up', signUp)

export default router;