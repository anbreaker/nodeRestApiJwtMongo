import {Router} from 'express';
const router = Router();

// Routes
router.get('/', (req, res) => res.json('get products'));

export default router;
