<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Solutions extends CI_Controller {

	public function index() {
		$data['main'] = 'solutions_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>