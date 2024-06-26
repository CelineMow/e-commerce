<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MonEspaceController extends AbstractController
{
    #[Route('/monEspace', name: 'app_mon_espace')]
    public function index(): Response
    {
        return $this->render('mon_espace/index.html.twig', [
            'controller_name' => 'MonEspaceController',
        ]);
    }
}
