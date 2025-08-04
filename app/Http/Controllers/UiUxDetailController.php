<?php

namespace App\Http\Controllers;

use App\Models\UiUxDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UiUxDetailController extends Controller
{
    public function index($project_id)
    {
        return UiUxDetail::where('project_id', $project_id)->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'type' => 'required',
            'title' => 'required',
            'content' => 'nullable',
            'file' => 'nullable|file'
        ]);
        if ($request->hasFile('file')) {
            $data['file_path'] = $request->file('file')->store('uiux', 'public');
        }
        unset($data['file']);
        $uiux = UiUxDetail::create($data);
        return response()->json($uiux, 201);
    }

    public function update(Request $request, $id)
    {
        $uiux = UiUxDetail::findOrFail($id);
        $data = $request->validate([
            'type' => 'sometimes',
            'title' => 'sometimes',
            'content' => 'nullable',
            'file' => 'nullable|file'
        ]);
        if ($request->hasFile('file')) {
            if ($uiux->file_path) Storage::disk('public')->delete($uiux->file_path);
            $data['file_path'] = $request->file('file')->store('uiux', 'public');
        }
        unset($data['file']);
        $uiux->update($data);
        return response()->json($uiux);
    }

    public function destroy($id)
    {
        $uiux = UiUxDetail::findOrFail($id);
        if ($uiux->file_path) Storage::disk('public')->delete($uiux->file_path);
        $uiux->delete();
        return response()->json(['message' => 'Deleted']);
    }
}